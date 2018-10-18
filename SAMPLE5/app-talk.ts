namespace App{
    export class Talk{
        public static GetGreeting( now : Date ) : string {
            let hour = now.getHours();
            if( hour < 5 ) {
                return "Welcome back!";
            } else if( hour < 12 ) {
                return "Good morning!";
            } else if( hour < 16 ) {
                return "Good afternoon!";
            } else if ( hour < 22 ) {
                return "Good evening!";
            } else {
                return "Welcome back!";
            }
        }
    }
}