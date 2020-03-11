module.exports = {
  title: 'TestBench',
  description: 'Design-oriented test framework for Ruby',
  dest: './_build',
  themeConfig: {
    activeHeaderLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Documentation', items: [
          { text: 'Quick Start', link: '/Documentation#quick-start' },
          { text: 'Running Test Files', link: '/Documentation#running-test-files' },
          { text: 'Writing Tests', link: '/Documentation#writing-tests' },
          { text: 'Assertions', link: '/Documentation#assertions' },
          { text: 'Block-Form Assertions', link: '/Documentation#block-form-assertions' },
          { text: 'Fixtures', link: '/Documentation#fixtures' },
        ]
      },
      {
        text: 'Recipes',
        items: [
          { text: 'Running All Tests in a Single Directory', link: '/Recipes#running-all-tests-in-a-single-directory' },
          { text: 'Using TestBench Without Monkey Patching', link: '/Recipes#using-testbench-without-monkey-patching' },
          { text: 'Randomizing the Execution Order', link: '/Recipes#randomizing-the-execution-order' },
          { text: 'Parallel Test Execution', link: '/Recipes#parallel-test-execution' },
          { text: "Changing TestBench's Output Device", link: '/Recipes#changing-testbench-s-output-device' },
          { text: 'Re-run Failed Tests', link: '/Recipes#re-run-failed-tests' },
        ]
      }
    ]
  }
}
