import en from "../assets/localization/en.json"
import fi from "../assets/localization/fi.json"

function getString(folder, name, lang) {
    if (lang == "fi") {
        return fi[folder][name] || "Ei määritelty"
    }
    else return en[folder][name] || "Not defined"
}

export default getString