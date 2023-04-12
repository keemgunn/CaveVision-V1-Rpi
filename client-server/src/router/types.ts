export { };
declare global {

  /**
   * Defines router guard.
   */
  type PageAccessType = 'public' | 'user' | 'admin' | 'none';

  /**
   * @property name: `string`
   * @property uri: `string`
   * @property alias: `Array<string>`
   * @property allowAccess: `PageAccessType` : 'public' | 'user' | 'admin' | 'none';
   */
  interface PageRouteSetting {
    uri: string;
    alias: Array<string>;
    allowAccess: PageAccessType;
  }



  type HowToShowSublinks = 'always-show' | 'always-hide' | 'show-on-wide' | null;

  interface NavRecord {
    title: string
    icon: string
    uri: string
    sublinks: HowToShowSublinks
    nestedRecords: Array<NavRecord> | null
  }

  type NavRecords = Array<NavRecord>

}

