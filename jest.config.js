/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",  // Usa "jsdom" si estás probando código que interactúa con el DOM
  transform: {
    "^.+\\.tsx?$": "ts-jest",  // Transformación para archivos .ts y .tsx usando ts-jest
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",  // Opcional: mapea alias para tus módulos si usas algo como @/utils
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Opcional: archivo de configuración adicional
};