describe("App", () => {
  describe("Counter", () => {
    it("is set to 120 when the button is clicked", () => {
      expect(counter.textContent).toBe('0');
      button.click();
      expect(counter.textContent).toBe('120');
    });
  });

  describe("Button", () => {
    it("has an ID of 'click-me'", () => {
      expect(button.getAttribute('id')).toBe('click-me');
    });
  });

  describe("Factorial", () => {
    it("returns the factorial of positive numbers", () => {
      expect(factorial(3)).toBe(6);
      expect(factorial(13)).toBe(6227020800);
      expect(factorial(7)).toBe(5040);
      expect(factorial(5)).toBe(120);
      expect(factorial(10)).toBe(3628800);
    });

    it("returns 1 if the provided number is less than 1", () => {
      expect(factorial(1)).toBe(1);
      expect(factorial(-3)).toBe(1);
      expect(factorial(-87)).toBe(1);
      expect(factorial(0)).toBe(1);
      expect(factorial(-100)).toBe(1);
    });
  });

  describe("Computer", () => {
    it("is created with a hard drive size of 512", () => {
      const computer = new Computer();
      expect(computer.hardDriveSpace).toBe(512);
    });

    describe("Hard Drive", () => {
      describe('installProgram', () => {
        var computer;

        beforeEach(function (done) {
          computer = new Computer();
          computer.installProgram(123, function () {
            done();
          });
        });

        it("can install a program if there is sufficient space", (done) => {
          expect(computer.hardDriveSpace).toBe(389);
          done();
        });
      });

      describe('installProgram', () => {
        var computer;

        beforeEach(function (done) {
          computer = new Computer();
          computer.installProgram(513, function () {
            done();
          });
        });

        it("will not install the program if there is insufficient space", (done) => {
          expect(computer.hardDriveSpace).toBe(512);
          done();
        });
      });
    });

    describe("format", () => {
      var computer;

      beforeEach((done) => {
        computer = new Computer();
        computer.installProgram(200, function () {
          done();
        });
      });

      it("resets the hard drive to 512, even after programs have been installed", (done) => {
        expect(computer.hardDriveSpace).toBe(312);
        computer.format();
        expect(computer.hardDriveSpace).toBe(512);
        done();
      });
    });
  });
});