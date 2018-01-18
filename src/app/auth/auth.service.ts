import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{
    constructor(private router:Router){}

    token :string;
    

    //Signup
    signupUser(email:string,password:string){
        
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(
            response => {
                alert('Successfuly Registered');
                this.router.navigate(['/signin']);  //navigate to signin
            }
        )
        .catch(
            error=> console.log(error)
        )
    }
    

    //SignIn
    signinUser(email:string ,password:string){
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
            response => {
                this.router.navigate(['/']);    //navigate to homepage after login
                firebase.auth().currentUser.getToken() //get the response (token)
                .then(
                    (tk:string) => {
                        this.token =tk;
                    }
                )
            }
        )
        .catch(
            error => console.log(error)  //error handling
        );
    }

    getToken(){
        firebase.auth().currentUser.getToken()
        .then(
            (token :string) => {
                this.token =token;
            }
        );
        return this.token;
    }
    
    
    isAuthenticated(){
        return this.token!=null;
    }

    onLogOut(){
        firebase.auth().signOut();
        this.token = null;
        }
}