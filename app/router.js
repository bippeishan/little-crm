module.exports = (app) => {
    app.router.resources('members', '/api/members', app.controller.member);
};