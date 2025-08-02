/**
 * Entity Object: "Resume" (model domain)
 * 
 * This class models the properties of a resume, including its ID, name,
 * language code, and file path. It provides public getters to access
 * this information.
 * 
 * @export
 * @class Resume
 */
export class Resume {
  
  /**
   * Unique identifier for the resume.
   * 
   * @private
   * @type {number}
   */
  private id: number;

  /**
   * Display name of the resume.
   * 
   * @private
   * @type {string}
   */
  private name: string;

  /**
   * Language code associated with the resume (e.g., 'en', 'es').
   * 
   * @private
   * @type {string}
   */
  private languageCode: string;

  /**
   * Path to the PDF file for this resume.
   * 
   * @private
   * @type {string}
   */
  private filePath: string;

  /**
   * Creates a new Resume instance.
   * 
   * @param {number} id Unique identifier for the resume.
   * @param {string} name Human-readable name for the resume.
   * @param {string} languageCode Language code of the resume (ISO format).
   * @param {string} filePath Path to the PDF file for download.
   */
  constructor(id: number, name: string, languageCode: string, filePath: string) {
    this.id = id;
    this.name = name;
    this.languageCode = languageCode;
    this.filePath = filePath;
  }

  /**
   * Gets the unique ID of the resume.
   * 
   * @returns {number} The resume's ID.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Gets the name of the resume.
   * 
   * @returns {string} The resume's display name.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the language code of the resume.
   * 
   * @returns {string} The language code (e.g., 'en', 'es').
   */
  public getLanguageCode(): string {
    return this.languageCode;
  }

  /**
   * Gets the file path to the resume PDF.
   * 
   * @returns {string} The file path to the PDF.
   */
  public getFilePath(): string {
    return this.filePath;
  }
}