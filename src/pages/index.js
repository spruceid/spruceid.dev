import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Highlight from 'react-highlight.js';
import '../css/devibeans.min.css';
import Pokedex  from './pokedex';

function Index() {
  return (
    <Layout title="Index">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          marginBottom: '40px',
          fontSize: '20px',
        }}>
        <article style={{minWidth: '100px', maxWidth: '900px'}}>
          <h1>This is a header!</h1>
          Since we're using <a href='https://reactjs.org/docs/jsx-in-depth.html'>JSX</a>,
          we can just use normal HTML elements as needed for most things (links, headers, etc).
          New paragraphs are most easily done like this:
          <br /><br />
          That's because the Docusaurus CSS we're importing for this theme mangles the &lt;p&gt;aragraph tag.
          Let's see how we include code snippets! Since Docusaurus already depends on highlight.js, we might
          as well use it here:

          <Highlight language="bash">{`
for line in $(cat logs.txt)
do 
        echo 1;
done
`.slice(1, -1)}</Highlight>

        That's Bash, let's try a more obscure language with a more complicated code snippet.

        <Highlight language="racket">{`
;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname Eratosthenes) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor repeating-decimal #t #t none #f ())))
;; Sieve of Eratosthenes implemented in Racket

(require racket)

;; divides?: Number Number -> Boolean
;; Returns true if a divides b
(define (divides? a b)
  (= (modulo a b) 0))
(check-expect (divides? 4 2) true)
(check-expect (divides? 5 8) false)

;; sieve: Number -> [Listof Primes]
;; Returns a list of all prime numbers from 2 to n
;;   1. Make list of numbers from 1 to n (and then drop the '1')
;;   2. Remove all numbers divisible by the first number
;;   3. Repeat step 2 for each of the next numbers until we get to a number > (sqrt n)
(define (sieve n)
  (local
    [(define lst (rest (build-list n add1)))
     (define (do lst)
       (cond
         [(> (first lst) (floor (sqrt n))) lst]
         [(cons (first lst)
                (do (filter (λ (i) (not (divides? i (first lst)))) lst)))]))]
    (do lst)))
(check-expect (sieve 10) '(2 3 5 7))
`.slice(1, -1)}
        </Highlight>

        Since we're in React, we can do anything programmatic that we might want. For example, we could hack together
        a quick Pokedex:
        <Pokedex />
        I'm sure that will come in handy at some point, somehow.

        </article>
      </div>
    </Layout>
  );
}

export default Index;