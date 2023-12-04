import { GraphQLScalarType, Kind } from "graphql";

const dateTimeScalar = new GraphQLScalarType({
  name: "DateTime",
  description: "An ISO-8601 encoded UTC date string.",
  serialize(value) {
  
    if (!(value instanceof Date)) {
      throw new TypeError("Field error: value is not an instance of Date");
    }

    // Serializez la date (convertit la date en chaîne de caractères)
    return value.toISOString();
  },
  parseValue(value) {
    // Parsez la valeur (convertit la chaîne de caractères en date)
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      throw new TypeError("Field error: value is not a valid Date");
    }
    return date;
  },
  parseLiteral(ast) {
    // Assurez-vous que le type de noeud AST est une chaîne
    if (ast.kind !== Kind.STRING) {
      throw new TypeError("Field error: AST is not a string type");
    }

    const date = new Date(ast.value);
    if (Number.isNaN(date.getTime())) {
      throw new TypeError("Field error: value is not a valid Date");
    }
    return date;
  },
});

export default dateTimeScalar;
