const controller = {}

controller.register = async function (registerInfor) {

    let email = registerInfor.email
    let password = registerInfor.password
    let displayName = registerInfor.firstname + " " + registerInfor.lastname

    try {

        // 1, tao user

        await firebase.auth().createUserWithEmailAndPassword(email, password)

        // 2, update user
        await firebase.auth().currentUser.updateProfile({
            displayName: displayName
        })

        //3, send email

        await firebase.auth().currentUser.sendEmailVerification()
        view.setText('register-success', 'An email has been sent to your email address')

    } catch (error) {

        view.setText('register-error', error.message)

        view.showComponent('register')

    }

}

controller.logIn = async function (logInInfor) {

    let email = logInInfor.email

    let password = logInInfor.password

    try {

        let infor = await firebase.auth().signInWithEmailAndPassword(email, password)

        console.log(infor)

        if (infor.user && infor.user.emailVerified) {

            let data = localStorage.setItem('dataUser', JSON.stringify(infor))

            view.showComponent('default')

        }

        else {
            throw new Error('You must have verified email')
        }

    } catch (error) {

        view.setText('login-error', error.message)

    }

}

controller.loadShowPage = async function () {

    let doc = await firebase
        .firestore()
        .collection("product")
        .doc("ekJgHSks1Ba6kbSxIlv2")
        .get()

    console.log(doc)

    if (doc && doc.exists) {

        let item = transformDoc(doc)
        console.log(item)
        model.saveProductInfo(item.info)
        
    }

    view.showPage()
}

function transformDoc(doc){
    let data = doc.data() 
    data.id = doc.id
    return data
}


controller.changeOrder = function (name) {
    switch (name) {
        case "A to Z": {
            let info = model.productInfo
            for (let i = 0; i < info.length - 1; i++)
                for (let j = i + 1; j < info.length; j++) {
                    if (info[i].name.slice(0, 1) > info[j].name.slice(0, 1)) {
                        let temp = info[i]
                        info[i] = info[j]
                        info[j] = temp
                    }
                }
            model.saveProductInfo(info)

            break
        }

        case "Z to A": {
            let info = model.productInfo
            for (let i = 0; i < info.length - 1; i++)
                for (let j = i + 1; j < info.length; j++) {
                    if (info[i].name.slice(0, 1) < info[j].name.slice(0, 1)) {
                        let temp = info[i]
                        info[i] = info[j]
                        info[j] = temp
                    }
                }
            model.saveProductInfo(info)

            break
        }

        case "Featured Items": {
            controller.loadShowPage()

            break
        }

        case "PRICE LOW TO HIGH": {
            let info = model.productInfo
            for (let i = 0; i < info.length - 1; i++)
                for (let j = i + 1; j < info.length; j++) {
                    if (info[i].price > info[j].price) {
                        let temp = info[i]
                        info[i] = info[j]
                        info[j] = temp
                    }
                }
            model.saveProductInfo(info)

            break
        }

        case "PRICE HIGH TO LOW": {
            let info = model.productInfo
            for (let i = 0; i < info.length - 1; i++)
                for (let j = i + 1; j < info.length; j++) {
                    if (info[i].price < info[j].price) {
                        let temp = info[i]
                        info[i] = info[j]
                        info[j] = temp
                    }
                }
            model.saveProductInfo(info)

            break
        }

        case "Newest Items": {
            controller.loadShowPage()

            break
        }

        case "Best Selling": {
            controller.loadShowPage()

            break
        }

        case "By Review": {
            controller.loadShowPage()

            break
        }
    }
}