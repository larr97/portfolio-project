/**
 * Entity Object: "Language" (model domain)
 *
 * Represents a language supported by the application.
 *
 * @export
 * @class Language
 */
export class Language {
    
  /**
   * Unique identifier for the language.
   * @private
   * @type {number}
   */
  private id: number;

  /**
   * Display name of the language.
   * @private
   * @type {string}
   */
  private name: string;

  /**
   * Language code (e.g., 'en', 'es').
   * @private
   * @type {string}
   */
  private code: string;

  /**
   * Flag emoji or symbol representing the language.
   * @private
   * @type {string}
   */
  private flag: string;

  /**
   * Creates an instance of Language.
   *
   * @param {number} id - Unique identifier.
   * @param {string} name - Name of the language.
   * @param {string} code - Language code.
   * @param {string} flag - Flag symbol.
   */
  constructor(id: number, name: string, code: string, flag: string) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.flag = flag;
}

  /**
   * Gets the language ID.
   *
   * @returns {number} The unique ID of the language.
   */
  public getId(): number { return this.id; }

  /**
   * Gets the language name.
   *
   * @returns {string} The name of the language.
   */
  public getName(): string { return this.name; }

  /**
   * Gets the language code.
   *
   * @returns {string} The language code (e.g., 'en').
   */
  public getCode(): string { return this.code; }

  /**
   * Gets the language flag symbol.
   *
   * @returns {string} The flag representing the language.
   */
  public getFlag(): string { return this.flag; }

}