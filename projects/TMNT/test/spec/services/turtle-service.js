'use strict';

describe('Service: TurtleService', function () {

  // load the service's module
  beforeEach(module('tmntApp'));

  // instantiate service
  var TurtleService;
  beforeEach(inject(function (_TurtleService_) {
    TurtleService = _TurtleService_;
  }));

  it('should do get a team', inject(function ($httpBackend) {
    var teamId = 1;

    $httpBackend.expectGET('http://pure-ocean-3603.herokuapp.com/team/' + teamId).respond({id: 1, name: 'Streganona'})
    TurtleService.getTeam(1).then(function (result) {
      expect(result.name).toBe('Streganona');
    });
    $httpBackend.flush();
  }));

  it('should do get teams', inject(function ($httpBackend) {
    $httpBackend.expectGET('http://pure-ocean-3603.herokuapp.com/team/').respond([{id: 1, name: 'Streganona'}, {id: 2, name: 'Mary Poppins'}]);

    TurtleService.getTeams().then(function (result) {
      expect(result[0].name).toBe('Streganona');
      expect(result[1].name).toBe('Mary Poppins');
    });
    $httpBackend.flush();
  }));
});
