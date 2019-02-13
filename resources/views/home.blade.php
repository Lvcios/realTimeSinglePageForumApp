<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>
<body>
    <div id="app">
            <v-app>
                <v-content>
                    <template>
                        <v-toolbar>
                          <v-toolbar-side-icon></v-toolbar-side-icon>
                          <v-toolbar-title>Title</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-toolbar-items class="hidden-sm-and-down">
                            <v-btn flat>Link One</v-btn>
                            <v-btn flat>Link Two</v-btn>
                            <v-btn flat>Link Three</v-btn>
                          </v-toolbar-items>
                        </v-toolbar>
                      </template>
                </v-content>
            </v-app>
    </div>
    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
