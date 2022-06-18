export const randomId = async():Promise<string> => {
    return await crypto.randomUUID().split("-").join("") +
        await crypto.randomUUID().split("-").join("");
}