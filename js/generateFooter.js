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
    button class="btn waves-effect deep-orange ${Object.values(generateFooter.additionalClassIfAny)[i]}" type="submit" name="action">${Object.values(generateFooter.text)[i]}
    <i class="material-icons left">${Object.values(generateFooter.icon)[i]}</i>
    </button></a>  
  `)

};
