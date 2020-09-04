import 'package:flutter/material.dart';
import 'package:myapp/result.dart';

import './quiz.dart';
import './result.dart';

//void main() {
//runApp(MyApp());
//}

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return  _MyAppState();
  }

}

class _MyAppState extends State<MyApp> {

  var _questionIndex = 0;
  var _totalScore = 0;

  final _questions = const[
      {'questionText':'Which team does Rahane represent this IPL?',
       'answers':[{'text':'RR','score':0},{'text':'RCB','score':0},{'text':'DC','score':1},{'text':'KKR','score':0},],
      },
      {'questionText':'Which English All-Rounder was recently signed by CSK?',
       'answers':[{'text':'Tom Curran','score':0},{'text':'Sam Curran','score':1},{'text':'Chris Woakes','score':0},{'text':'Moeen Ali','score':0},],
      },
      {'questionText':'Ravi Ashwin was transferred to Delhi from?',
       'answers':[{'text':'RR','score':0},{'text':'CSK','score':0},{'text':'KXIP','score':1},{'text':'KKR','score':0},],
      },
     
  ];

  void _resetQuiz() {
     
     setState(() {
       _questionIndex = 0;
       _totalScore = 0;
     });

  }

  void _answerQuestion(int score) {

    _totalScore += score;

    setState(() {
      _questionIndex = _questionIndex+1;
    });
    print(_questionIndex);

    if(_questionIndex < _questions.length){
      print('We have more questions');
    }else{
      print('No more questions');
    }
  }

  @override
  Widget build(BuildContext context) {

   
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(

          title: Text('IPL 2020 Quizzz!'),
        ),
        body: _questionIndex < _questions.length 
         ? Quiz(answerQuestion: _answerQuestion,questionIndex: _questionIndex,questions:_questions,)   
         : Result(_totalScore,_resetQuiz),
      ),
    );
  }
}

