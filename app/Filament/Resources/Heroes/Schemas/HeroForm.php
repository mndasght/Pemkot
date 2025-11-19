<?php

namespace App\Filament\Resources\Heroes\Schemas;

use Filament\Forms\Components\Checkbox;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class HeroForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('title'),
                TextInput::make('subtitle'),
                TextInput::make('description'),
                FileUpload::make('image')
                ->disk('public')
                ->directory('hero')
                ->image(),
                Checkbox::make('is_active')
            ]);
    }
}
