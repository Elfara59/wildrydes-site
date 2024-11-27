window._config = {
    cognito: {
        userPoolId: 'eu-north-1_CdMz8C3cC', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: 'mbm1d2gniat1qqu80g0jq1gsq', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        clientSecret: '1uiibbortel84eir5a2uk7tqv9cbs61ribi4neg2qejmh59qkgbc', // Ajoutez votre secret ici
        region: 'eu-north-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: '' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    },
    calculateSecretHash: function(username) {
        // Fonction pour calculer le SECRET_HASH
        const crypto = window.crypto || require('crypto'); // Utilise l'API Web Crypto ou Node.js
        const message = username + this.cognito.userPoolClientId;
        const key = this.cognito.clientSecret;

        // Calcul du hash HMAC-SHA256 et encodage en Base64
        const hmac = crypto.createHmac('sha256', key)
            .update(message)
            .digest('base64');
        return hmac;
    }
};
