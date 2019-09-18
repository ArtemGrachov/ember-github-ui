import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const orgId = this.modelFor('org').login;
    const repoId = this.modelFor('org.repo').name;

    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors`)
      .then(rawContributor => {
        rawContributor.oldId = rawContributor.id;
        rawContributor.id = rawContributor.login;
        return rawContributor;
      });
  }
});
