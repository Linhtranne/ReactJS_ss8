interface UserData {
    firstName: string;
    age: number;
  }
  
  interface UserPreferences {
    darkMode: boolean;
    favoriteColors: string[];
  }
  
  type UserSettings = UserData & UserPreferences;
  
  function combineUserSettings(userData: UserData, userPreferences: UserPreferences): UserSettings {
    return { ...userData, ...userPreferences };
  }
  
  const userData: UserData = { firstName: "Linh", age: 18 };
  const userPreferences: UserPreferences = { darkMode: true, favoriteColors: ["blue", "green"] };
  
  const combinedSettings = combineUserSettings(userData, userPreferences);
  console.log(combinedSettings);
  