export const InputField = ({ placeholder, changeHandeler, value, name, type }) => {
    return <input type={type} id="username" name={name} onChange={changeHandeler} placeholder={placeholder} value={value} class="border border-secondary rounded-lg px-3 py-2 w-full focus:outline-none focus:border-primary focus:border-2" />

}