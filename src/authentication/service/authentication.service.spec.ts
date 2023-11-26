import { Test, TestingModule } from '@nestjs/testing';
import { AuthenticationService } from './authentication.service';
import { UserService } from 'src/user/service/user.service';
import { JwtService } from '@nestjs/jwt';
import { DeepMocked, createMock } from '@golevelup/ts-jest';
import * as bcrypt from 'bcrypt';
import { cloneDeep } from 'lodash';

describe('AuthenticationService', () => {
  const MOCK_USERNAME = 'username';
  const MOCK_PASSWORD = 'password';
  let authenticationService: AuthenticationService;
  let mockUserService: DeepMocked<UserService>;
  let mockJwtService: DeepMocked<JwtService>;

  beforeAll(async () => {
    mockUserService = createMock<UserService>();
    mockJwtService = createMock<JwtService>();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthenticationService,
        { provide: UserService, useValue: mockUserService },
        { provide: JwtService, useValue: mockJwtService },
      ],
    }).compile();

    authenticationService = module.get<AuthenticationService>(
      AuthenticationService,
    );
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(authenticationService).toBeDefined();
  });

  describe('login', () => {
    const encryptPassword = (password) => {
      const salt = bcrypt.genSaltSync();
      return bcrypt.hashSync(password, salt);
    };
    const MOCK_USER = {
      id: 'id',
      username: MOCK_USERNAME,
      password: MOCK_PASSWORD,
    } as any;

    it('should call findUserByUsername', async () => {
      const mockUser = cloneDeep(MOCK_USER);
      mockUser.password = encryptPassword(mockUser.password);
      mockUserService.findUserByUsername.mockResolvedValueOnce(mockUser);
      await authenticationService.login({
        username: MOCK_USERNAME,
        password: MOCK_PASSWORD,
      });
      expect(mockUserService.findUserByUsername).toHaveBeenCalledTimes(1);
      expect(mockUserService.findUserByUsername).toHaveBeenCalledWith(
        mockUser.username,
      );
    });
    it('should throw an error when not found user', async () => {
      expect(
        authenticationService.login({
          username: MOCK_USERNAME,
          password: MOCK_PASSWORD,
        }),
      ).rejects.toThrow('User not found');
    });
    it('should throw an error when password not correct', async () => {
      const mockUser = cloneDeep(MOCK_USER);
      mockUser.password = 'random';
      mockUserService.findUserByUsername.mockResolvedValueOnce(mockUser);
      expect(
        authenticationService.login({
          username: MOCK_USERNAME,
          password: MOCK_PASSWORD,
        }),
      ).rejects.toThrow('Incorrect password');
    });
    it('should return accessToken from jwtService.sign', async () => {
      const mockUser = cloneDeep(MOCK_USER);
      mockUser.password = encryptPassword(mockUser.password);
      mockUserService.findUserByUsername.mockResolvedValueOnce(mockUser);
      const accessToken = 'accessToken';
      mockJwtService.sign.mockReturnValueOnce(accessToken);
      const result = await authenticationService.login({
        username: MOCK_USERNAME,
        password: MOCK_PASSWORD,
      });
      expect(result).toEqual({
        accessToken,
      });
    });
    it('should throw an error when something went wrong', () => {
      const mockError = new Error('mock error');
      mockUserService.findUserByUsername.mockRejectedValueOnce(mockError);
      expect(
        authenticationService.login({
          username: MOCK_USERNAME,
          password: MOCK_PASSWORD,
        }),
      ).rejects.toThrow(mockError);
    });
  });
});
