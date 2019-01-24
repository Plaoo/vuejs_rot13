var app = new Vue({
    el: "#app",
    data: {
        message: "",
        modified_message: "",
        all_text: [],

        

    },
    methods: {
        deCryptMessage() {

            var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
            var index = x => input.indexOf(x);
            var translate = x => index(x) > -1 ? output[index(x)] : x;
            this.modified_message = this.message.split('').map(translate).join('');

            var newObj = {};
            newObj.actual_text = this.message;
            newObj.deCryptMessage = this.modified_message;
            this.all_text.push(newObj);

            // console.log(this.all_text);
            // return this.modified_message
        }

    }
})