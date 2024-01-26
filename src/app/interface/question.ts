export interface Question {
  question: string,
  answers: answers,
  correct_answers : correct_answer
}

export interface answers {
  answer_a : string,
  answer_b : string,
  answer_c : string,
  answer_d : string,
  answer_e : string,
  answer_f : string,
}

export interface correct_answer {
  answer_a_correct : boolean,
  answer_b_correct : boolean,
  answer_c_correct : boolean,
  answer_d_correct : boolean,
  answer_e_correct : boolean,
  answer_f_correct : boolean
}
