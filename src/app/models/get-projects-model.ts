export class getProjectResult {
    id: string;
    name: string;
    location: string;
  
    constructor(obj?: any) {
      this.id              = obj && obj.id             || null;
      this.name            = obj && obj.title          || null;
      this.location        = obj && obj.description    || null;
    }
  }
  