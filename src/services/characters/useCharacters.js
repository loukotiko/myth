import characters from "./characters.json";
import { useCallback } from "react";

export default function useCharacters() {
  const charactersByRole = useCallback(
    (...roles) => characters.filter(char => roles.includes(char.role)),
    []
  );

  const getCharacter = useCallback(key =>
    characters.find(char => char.key === key)
  );

  const getCharacterUrl = useCallback(
    key => `/${getCharacter(key).role}/${key}`
  );

  return {
    charactersByRole,
    getCharacter,
    getCharacterUrl
  };
}
