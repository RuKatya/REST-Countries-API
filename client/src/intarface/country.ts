interface Curr {
    code: string;
    name: string;
    symbol: string;
}

interface Flag {
    png: string;
    svg: string;
}

interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

interface RegionalBloc {
    acronym: string;
    name: string;
}

interface Translation {
    br: string;
    de: string;
    es: string;
    fa: string;
    fr: string;
    hr: string;
    hu: string;
    it: string;
    ja: string;
    nl: string;
    pt: string;
}

export interface Country {
    alpha2Code: string;
    alpha3Code: string;
    altSpellings: Array<string>;
    area: number;
    borders: Array<string>;
    callingCodes: Array<string>;
    capital: string;
    cioc: string;
    currencies: Array<Curr>;
    demonym: string;
    flag: string;
    flags: Flag;
    independent: boolean;
    languages: Array<Language>;
    latlng: Array<number>;
    name: string;
    nativeName: string;
    numericCode: string;
    population: number;
    region: string;
    regionalBlocs: Array<RegionalBloc>;
    subregion: string;
    timezones: Array<string>;
    topLevelDomain: Array<string>;
    translations: Translation;
}
