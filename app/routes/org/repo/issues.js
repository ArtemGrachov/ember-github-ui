import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const orgId = this.modelFor('org').login;
    const repoId = this.modelFor('org.repo').name;

    return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues`)
      .then(rawIssue => {
        rawIssue.oldId = rawIssue.id;
        rawIssue.id = rawIssue.name;
        return rawIssue;
      });
  }
});
