export type question = {
    id:number,
    created_at:Date,
    question:string,
    option_one:string,
    option_two:string,
    option_one_value:number,
    option_two_value:number,
}

export type options = {
    option_one:string,
    option_two:string,
    option_one_value:number,
    option_two_value:number,
}