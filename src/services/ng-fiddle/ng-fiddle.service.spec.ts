import { NgFiddleService } from './ng-fiddle.service';

describe('NgFiddleService', () => {
  let url: string;

  it('should return a valid url', () => {
    url = NgFiddleService.getFiddleSrc('https://jsfiddle.net/zalun/NmudS', 'result,js,html,css', 'dark');
    expect(url.indexOf('https://jsfiddle.net/zalun/NmudS/embedded/result,js,html,css/dark/') > -1).toBeTruthy();
  });
});
