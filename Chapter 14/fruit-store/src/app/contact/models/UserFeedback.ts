export class UserFeedback {
    constructor(
        public firstName: string,
        public email: string,
        public description: string,
        public category?: string
    ) { }
}
