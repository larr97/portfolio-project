/**
 * Entity Object: "Theme" (model domain)
 * 
 * Represents a theme option used in the application.
 * It encapsulates metadata such as ID, display name, code, and icon used for theming and UI representation.
 */
export class Theme {

   /**
   * Unique identifier for the theme.
   * @private
   * @type {number}
   */
  private id: number;

  /**
   * Human-readable name of the theme (e.g., "Light", "Dark").
   * @private
   * @type {string}
   */
  private name: string;

  /**
   * Unique string code used to identify the theme (e.g., "light", "dark").
   * @private
   * @type {string}
   */
  private code: string;

  /**
   * Icon name or symbol associated with the theme (e.g., Material icon name or emoji).
   * @private
   * @type {string}
   */
  private icon: string;

  /**
   * Constructs a new Theme instance.
   *
   * @param id Unique numeric ID for the theme.
   * @param name Display name of the theme.
   * @param code Internal code used to identify the theme.
   * @param icon Icon representing the theme (Material icon name or emoji).
   */
  constructor(id: number, name: string, code: string, icon: string) {
    this.id = id;
    this.name = name;
    this.code = code;
    this.icon = icon;
  }

  /**
   * Gets the unique ID of the theme.
   * @returns The theme's ID.
   */
  public getId(): number {
    return this.id;
  }

  /**
   * Gets the display name of the theme.
   * @returns The theme's name.
   */
  public getName(): string {
    return this.name;
  }

  /**
   * Gets the code identifier of the theme.
   * @returns The theme's code.
   */
  public getCode(): string {
    return this.code;
  }

  /**
   * Gets the icon associated with the theme.
   * @returns The theme's icon.
   */
  public getIcon(): string {
    return this.icon;
  }
}