import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { sendEmailVerification } from "firebase/auth";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userData: any;
    userVerification: any;
    isLogedIn: boolean = false;

    constructor(
        private angularFireStore: AngularFirestore,
        private angularFireAuth: AngularFireAuth,
        private router: Router
    ) {
        this.angularFireAuth.authState.subscribe((user) => {
            if (user) {
                this.userData = user;
                localStorage.setItem("user", JSON.stringify(this.userData));
            }
            else {
                localStorage.setItem("user", 'null');
            }
        })
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem("user")!);
        return user !== null && user.emailVerified !== false ? true : false;
    }

    getToken() {
        const user = JSON.parse(localStorage.getItem("user")!);
        const token = user !== null ? user.stsTokenManager.accessToken : null;
        return token;
    }


    signUp(email: string, password: string) {
        return this.angularFireAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
                this.sendVerificationMail(result.user);
                this.setUserData(result.user);
                this.userVerification = result.user;
            })
            .catch((error) => {
                window.alert(error.message);
            })
    }

    sendVerificationMail(currentUser: any) {
        if (currentUser) {
            sendEmailVerification(currentUser)
                .then(() => {
                    this.router.navigate(['verify-email-address']);
                });

        }
    }

    setUserData(userData: any) {
        const userRef: AngularFirestoreDocument<any> = this.angularFireStore.doc(
            `userFullData/${userData.uid}`
        );
        const user: User = {
            uid: userData.uid,
            email: userData.email,
            emailVerified: userData.emailVerified,
        };
        this.userData = user;
        return userRef.set(user, {
            merge: true,
        });
    }

    signIn(email: string, password: string) {
        return this.angularFireAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                if (result.user?.emailVerified) {
                    this.setUserData(result.user);
                    this.router.navigate(['']);
                }
                else {
                    alert("Please verify email address.");
                }
            })
            .catch((error) => {
                alert(error.message);
                alert("Invalid email or password.");
            })
    }

    signOut() {
        return this.angularFireAuth.signOut()
            .then(() => {
                localStorage.removeItem('user');
                this.router.navigate(['log-in']);
            }).
            finally(() => {
                this.isLogedIn = false;
            });
    }

}
