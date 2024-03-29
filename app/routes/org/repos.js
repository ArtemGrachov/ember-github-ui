import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let orgId = this.modelFor('org').login;
    return $.get(`https://api.github.com/orgs/${orgId}/repos`)
      .then(rawRepos => {
        return rawRepos.map(rawRepo => {
          rawRepo.oldId = rawRepo.id;
          rawRepo.id = rawRepo.name;
          return rawRepo;
        })
      });
  }
});
