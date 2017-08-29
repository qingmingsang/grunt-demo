module.exports = function(grunt) {
    grunt.initConfig({
        log: {
            foo: [1, 2, 3],
            bar: 'hello world',
            baz: false
        },
        foo:{bar: {baz: false}}
    });

    grunt.registerMultiTask('log', 'Log stuff.', function() {
        grunt.log.writeln(this.target + ': ' + this.data);
    });
    grunt.registerTask('default', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff...').ok();
    });
    grunt.registerTask('foo1', 'A sample task that logs stuff.', function(arg1, arg2) {
        if (arguments.length === 0) {
            grunt.log.writeln(this.name + ", no args");
        } else {
            grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
        }
    });
    grunt.registerTask('foo2', 'My "foo" task.', function() {
        //这部分感觉还有问题
        // Enqueue "bar" and "baz" tasks, to run after "foo" finishes, in-order.
        grunt.task.run('bar', 'baz');
        // Or:
        //grunt.task.run(['bar', 'baz']);
    });
    grunt.registerTask('asyncfoo', 'My "asyncfoo" task.', function() {
        // Force task into async mode and grab a handle to the "done" function.
        var done = this.async();
        // Run some sync stuff.
        grunt.log.writeln('Processing task...');
        // And some async stuff.
        setTimeout(function() {
            grunt.log.writeln('All done!');
            done();
        }, 1000);
    });

    grunt.registerTask('foo', 'My "foo" task.', function(a, b) {
        grunt.log.writeln(this.name, a, b);
    });
};