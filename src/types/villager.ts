export default interface NameType {
    nameUSen: string;
    nameEUen: string;
    nameEUde: string;
    nameEUes: string;
    nameUSes: string;
    nameEUfr: string;
    nameUSfr: string;
    nameEUit: string;
    nameEUnl: string;
    nameCNzh: string;
    nameTWzh: string;
    nameJPja: string;
    nameKRko: string;
    nameEUru: string;
}

export default interface VillagerType {
    id: number;
    fileName: string;
    name: NameType;
    personality: string;
    birthdayString: string;
    birthday: string;
    species: string;
    gender: string;
    catchPhrase: string;
    icon_uri: string;
    image_uri: string;
}