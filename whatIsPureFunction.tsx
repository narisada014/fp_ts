const isIndexPage = () => {
  return window.location.pathname === "/"
}

const isIndexPageFp = (pathname: string) => {
  return pathname === '/'
}

interface User {
  ageInMonths: number
  name: string
}

const findUserAgeByName = (users: User[], name: string): number => {
  if (users.length == 0) {
    throw new Error("There are no users")
  }
  const user = users.find(u => u.name == name)
  if (!user) {
    throw new Error("User not found!")
  } else {
    return user.ageInMonths
  }
}

const safeFindUserAgeByName = (users: User[], name: string): Promise<number> => {
  if (users.length == 0) {
    return Promise.reject(new Error("There are no users!"))
  }
  const user = users.find(u => u.name === name)
  if (!user) {
    return Promise.reject(new Error("user not found"))
  } else {
    return Promise.resolve(user.ageInMonths)
  }
}

const users = [
  { "ageInMonths": 1, "name": "Remo" },
  { "ageInMonths": 2, "name": "Leo" }
];

safeFindUserAgeByName(users, "Remo").then(userAge1 => console.log(`Remo: ${userAge1}s`))
safeFindUserAgeByName([], "takeru").then(age => console.log(age)).catch(e => console.log(e))