/**
 * Entity Object: "Project" (model domain)
 *
 * Represents a project in the portfolio application.
 *
 * @export
 * @class Project
 */
export class Project {

  /**
   * Unique identifier for the project.
   * @private
   * @type {number}
   */
  private id: number;

  /**
   * Title of the project.
   * @private
   * @type {string}
   */
  private name: string;

  /**
   * Full description of the project.
   * @private
   * @type {string}
   */
  private description: string;

   /**
   * Short description of the project.
   * @private
   * @type {string}
   */
  private summary: string;

  /**
   * Technologies used in this project.
   * @private
   * @type {string[]}
   */
  private technologies: string[];

  /**
  * URL to the live project or demo or repository.
   * @private
   * @type {string | null}
   */
  private projectUrl: string | null;

  /**
   * Slug for the project.
   * @private
   * @type {string}
   */
  private slug: string;

  /**
   * Media items (photos, videos, etc.) related to the project.
   * @private
   * @type {string[]}
   */
  private media: string[];

  /**
   * Creates an instance of Project.
   *
   * @param {number} id Unique identifier.
   * @param {string} name Name of the project.
   * @param {string} description Description of the project.
   * @param {string} summary Short description of the project.
   * @param {string[]} technologies List of technologies used.
   * @param {string} projectUrl URL to the live project or demo instance.
   * @param {string} slug Slug for the project.
   * @param {string[]} media Photos 
   */
  constructor(
    id: number,
    name: string,
    description: string,
    summary: string,
    technologies: string[],
    projectUrl: string | null,
    slug: string,
    media: string[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.summary = summary;
    this.technologies = technologies;
    this.projectUrl = projectUrl;
    this.slug = slug;
    this.media = media;
  }

  /**
   * Get the unique identifier of the project.
   * @returns {number} Project ID
   */
  public getId(): number { return this.id; }

  /**
   * Get the name of the project.
   * @returns {string} Project name
   */
  public getName(): string { return this.name; }

  /**
   * Get the full description of the project.
   * @returns {string} Project description
   */
  public getDescription(): string { return this.description; }

  /**
   * Get the short summary of the project.
   * @returns {string} Project summary
   */
  public getSummary(): string { return this.summary; }

  /**
   * Get the list of technologies used in the project.
   * @returns {string[]} Array of technology names
   */
  public getTechnologies(): string[] { return this.technologies; }

  /**
   * Get the URL to the live project, demo, or repository.
   * @returns {string | null} Project URL or null if not available
   */
  public getProjectUrl(): string | null { return this.projectUrl; }

  /**
   * Get the URL-friendly slug of the project.
   * @returns {string} Project slug
   */
  public getSlug(): string { return this.slug; }

  /**
   * Get all media assets associated with the project.
   * @returns {string[]} Array of media URLs
   */
  public getMedia(): string[] { return this.media; }

  /**
   * Get the first media asset as the cover image for the project.
   * @returns {string} URL of the cover media
   */
  public getMediaCover(): string { return this.media[0]; }

}