export const TITLE = 'James Harrell';
export const GITHUB_URL = 'https://github.com/jamesharrell71';
export const EMAIL = 'james.harrell71@gmail.com';
export const HOME_HEADER = 'This website is under construction.';
export const HOME_BODY = 'Website will be home to my portfolio including live demos of my projects';
export const RESUME_URL = '../assets/James_Harrell_Resume.pdf';

export const GITHUB_API = 'https://api.github.com/users/jamesharrell71/repos';

export const portfolio_constants: Array<any> = [
    {provide: GITHUB_URL, useValue: GITHUB_URL},
    {provide: TITLE, useValue: TITLE},
    {provide: EMAIL, useValue: EMAIL},
    {provide: HOME_HEADER, useValue: HOME_HEADER},
    {provide: HOME_BODY, useValue: HOME_BODY},
    {provide: RESUME_URL, useValue: RESUME_URL},
    {provide: GITHUB_API, useValue: GITHUB_API}
  ];
