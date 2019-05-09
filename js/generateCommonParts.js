var generateFooter = {

    text: {
        1: 'Donate Now',

    },

    additionalClassIfAny: {
        1: 'donate',


    },

    icon: {
        1: 'monetization_on',

    },

    link: {
        1: 'href=https://act.autismspeaks.org/site/Donation2?idb=135287805&4141.donation=form1&DONATION_LEVEL_ID_SELECTED=1&df_id=4141&mfc_pref=T&idb=[[S76:idb]]"',

    },


}


for (var i = 0; i < Object.keys(generateFooter.text).length; i++) {
    $('#footer').append(`
    <a target="_blank"
    ${Object.values(generateFooter.link)[i]}
    ><button class="btn waves-effect deep-orange ${Object.values(generateFooter.additionalClassIfAny)[i]}" type="submit" name="action">${Object.values(generateFooter.text)[i]}
    <i class="material-icons left">${Object.values(generateFooter.icon)[i]}</i>
    </button></a>  
  `)

}

$("#navBar").append(`
<nav class="indigo" role="navigation">
            <!-- site title -->
            <div class="nav-wrapper container"><a id="logo-container" href="./index.html" class="brand-logo">NowYou!</a>
                <!-- link to login page -->


                <div class="row right" class="right hide-on-med-and-down">
                    <a href="./SignInAuth.html" class="btn-large waves-effect waves-light deep-orange"
                        id="login-btn">User

                        Login</a>
                </div>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="./index.html">Exercises</a></li>
                    <li><a href="./faqs.html">FAQ</a></li>
                    <li><a href="./contact.html">Contact Us</a></li>
                    <li><a href="./teamPage.html">The Team</a></li>
                    <li><a href="./UserProfile.html">My Profile</a></li>
                </ul>

            </div>
        </nav>
`)
