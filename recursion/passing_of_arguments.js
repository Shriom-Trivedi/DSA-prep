function func(n) {
  console.log(n);
  // if we pass n like this it will pass 5 first and then decrement so in a nutshell it is always passing 5 and since we don't have any base condition it will give stackoverflow error after printing 5 infinite times.

  // So it should be passed as `n - 1` 

  return func(--n);
}

func(5);
