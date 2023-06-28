import { ICharacter } from "../../types/character.type"

export function sanitizedData(results: ICharacter[], fav: ICharacter[]) {
    const array: ICharacter[] = results.map(character => {
        if (fav.length > 0) {
            for (let i = 0; i < fav.length; i++) {
                if (fav[i].id === character.id) {
                    return fav[i]
                }
            }
        }
        return {
            id: character.id,
            name: character.name,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin,
            image: character.image,
            episode: character.episode,
            favourite: false
        }
    })


    return array
}