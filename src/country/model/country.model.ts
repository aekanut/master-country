import { prop, getModelForClass } from '@typegoose/typegoose';

export class Country {
  @prop({ required: true, index: true })
  public name: string;

  @prop({ required: true })
  public enName: string;

  @prop({ required: true })
  public alpha2: string;

  @prop({ required: true })
  public alpha3: string;

  @prop({ required: true })
  public numeric: string;

  @prop({ required: true })
  public iso3166_2: string;
}

const CountryModel = getModelForClass(Country, {
  schemaOptions: {
    timestamps: true,
  },
});

export default CountryModel;
