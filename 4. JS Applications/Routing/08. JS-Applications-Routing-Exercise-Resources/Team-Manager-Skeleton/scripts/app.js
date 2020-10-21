async function getHomeView() {
    await applyCommon.call(this);
    this.partial('./templates/home/home.hbs');
};

async function getAbout() {
    await applyCommon.call(this);
    this.partial('./templates/about/about.hbs');
};

async function getLogin() {
    await applyCommon.call(this);
    this.partials.loginForm = await this.load('./templates/login/loginForm.hbs');
    this.partial('./templates/login/loginPage.hbs');
};

async function getRegister() {
    await applyCommon.call(this);
    this.partials.registerForm = await this.load('./templates/register/registerForm.hbs');
    this.partial('./templates/register/registerPage.hbs');
};

async function applyCommon() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs')
    };
};

// initialize the application
let app = Sammy('#main', function () {
    // include a plugin
    this.use('Handlebars', 'hbs');

    // define a 'route'
    this.get('#/', getHomeView);
    this.get('#/home', getHomeView);
    this.get('#/about', getAbout);
    this.get('#/login', getLogin);
    this.get('#/register', getRegister);

});

// start the application
app.run('#/');