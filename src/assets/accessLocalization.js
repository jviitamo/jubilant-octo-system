import en from "../assets/localization/en.json"
import fi from "../assets/localization/fi.json"

function getString(name, lang) {
    if (lang == "fi") {
        return fi[name]
    }
    else return en[name]
}

export default getString