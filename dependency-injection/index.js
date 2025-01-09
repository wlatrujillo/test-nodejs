var DI = function(dependency) {
  this.dependency = dependency;
}

DI.prototype.inject = function(func) {
      const code = func.toString();
      const arrowfuncs = /^\(([^\)]+)\)\s+?=>/;
      const functions = /^function\s{0,}[a-zA-Z\d_]{0,}\(([^\)]+)\)/;
      
      const foundArgs = code.match(functions) || code.match(arrowfuncs);
      console.log('foundArgs ---->', foundArgs);
      if (!foundArgs) {
            return func;
          }

      const args = foundArgs[1].split(",").map(s => s.trim());
      const deps = args.map(dep => this.dependency[dep]);
      
      return function() {
            return func.apply(this, deps);
      };
}

module.exports.DI = DI;
