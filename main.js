var app = new Vue({
    el: "#app",
    data: {
        message: "",
        modified_message: "",
        all_text: 
            {
            actual_text: "",
            decrypt_text: ""
        }

},
    methods: {
        deCryptMessage() {

            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
            var index = x => input.indexOf(x);
            var translate = x => index(x) > -1 ? output[index(x)] : x;
            this.modified_message = this.message.split('').map(translate).join('');

            this.all_text.actual_text = this.message;
            console.log(this.all_text.actual_text );
            this.all_text.decrypt_text = this.modified_message;
            console.log(this.all_text.decrypt_text )


            // console.log(this.all_text);
            // return this.modified_message
        }

    }
})