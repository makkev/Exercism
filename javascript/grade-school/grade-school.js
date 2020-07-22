export class GradeSchool {
  constructor() {
    this.students = {};
  }


  roster() {
    console.log(this.students);
    return [...Object.keys(this.students)].sort().reduce((rosterList, grade) => ({
      ...rosterList,
      [grade]: [...this.students[grade]].sort(),
    }), {})
  }

  // alternative way to implement roster
  roster2() {
    console.log(this.students);
    const k = [...Object.keys(this.students)].sort();
    let rosterList = {};
    k.forEach(e => rosterList[e] = [...this.students[e]].sort());
    return rosterList;
  }

  add(name, grade) {
    this.students[grade] = [...(this.students[grade] || []), name]
  }

  grade(n) {
    return [...this.students[n] || []].sort();

  }
}
