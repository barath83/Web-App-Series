import 'package:flutter/material.dart';


class Result extends StatelessWidget {

  final int resultScore;
  final Function resetHandler;
  Result(this.resultScore,this.resetHandler);

  @override
  Widget build(BuildContext context) {
    return Center(
           child : Column(
             children: [
               Text(
                      'Your score is $resultScore',
                      style: TextStyle(fontSize: 36,fontWeight: FontWeight.bold),
                      textAlign: TextAlign.center,),
               FlatButton(child:Text('Restart Quiz'),
               textColor: Colors.blue,
               onPressed: resetHandler,)        
             ],
           )
         );
  }
}