let val: unknown = 22;
val = "string value";
val = new Array();

if (val instanceof Array) {  // without this type guard the IDE will flag the push method as not recognised
  val.push(33);
}

console.log(val);

// Even though using the "unknown" type is more cumbersome (because of having to rely on type guards) than the "any" type, it is more preferable.
// It is also a lot safer since it's checked by the compiler.

