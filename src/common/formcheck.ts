/**
 * Form detection class;
 * you must be deliver three Arrays to the child of the class if you want to use.
 */
import Vue, { PluginObject } from 'vue';
let Check: any = {
    isEmpty(value: string, msg: string) {
        if (!value) {
            return msg;
        }
    },
};
class Form {
    private list: any[] = [];
    private add = (value: string[], rule: string[], errorMsg: string[]) => {
        value.forEach((e, i) => {
            this.list.push((): object => {
                return Check[rule[i]].call(this, e, errorMsg[i]);
            });
        })
    }
    private start = () => {
        for (let i = 0; i < this.list.length; i++) {
            let msg = this.list[i]();
            if (msg) {
                return msg;
            }
        }
    }
}
export default Form;