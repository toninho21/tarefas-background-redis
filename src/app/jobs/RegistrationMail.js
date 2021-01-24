import Mail from '../lib/Mail'

export default {
    key: 'RegistrationMail',
    options: {
        delay: 5000,
        priority: 3
    },
    async handle({data}) {
        const {user} = data;

        await Mail.sendMail({
            from: 'DIO <info@dio.com.br>',
            to: `${user.name}<${user.email}>`,
            subject: 'Cadastr de usuário',
            html: `Ola, ${user.name}, bemvindo a DIO`
        });
    }
}

